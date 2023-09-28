const Posts = ({ posts }) => {
  return (
    <>
      <section>
        <div className="page_content">
          {posts.map((post, index) => {
            return <p key={index}>{post.body}</p>;
          })}
        </div>
      </section>
    </>
  );
};

export default Posts;
