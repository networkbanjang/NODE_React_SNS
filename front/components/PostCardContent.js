import Link from 'next/link';
import PropTypes from 'prop-types';


const PostCardContent = ({ postData }) => {   //#해시태그 #익스프레스
  return (
    <div>
      {postData.split(/(#[^\s#]*)/g).map((v) => {
        if (v.match(/(#[^\s#]*)/g)) {
          return (
            <Link
              href={`/hashtag/${v.slice(1)}`}
              key={v}
            >
              <a>{v}</a>
            </Link>
          )
        }
        return v;
      })}

    </div>
  )
}

PostCardContent.prototype = {
  postData: PropTypes.string.isRequired,
}

export default PostCardContent;
