import {useQuery, gql} from '@apollo/client';
import Link from './Link';

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        description
        url
      }
    }
  }
`;

const LinkList = () => {
  const {data} = useQuery(FEED_QUERY);

  return (
    <div>
      {data && (
        <>
          {data.feed.links.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;
