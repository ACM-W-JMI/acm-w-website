import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BlogLists } from "../../data/BlogLists";
import BlogItem from "../../items/BlogItem";
import { MainLayout } from "../../styles/Layouts";
function Blogs() {
  return (
    <MainLayout>
      <h1 className="contact-heading">Blogs</h1>

      <VerticalTimeline>
        {BlogLists.length > 0 ? (
          BlogLists.map((blogItem, key) => (
            <BlogItem
              key={key}
              title={blogItem.title}
              subTitle={blogItem.subTitle}
              desc={blogItem.desc}
              date={blogItem.date}
              link={blogItem.link}
            />
          ))
        ) : (
          <div
            style={{
              fontSize: "1.6rem",
              color: "#a7a4a4",
              display: "block",
              alignItems: "center",
              justifyContent: "center",
              fontStyle: "bold",
            }}
          >
            No Events found
          </div>
        )}
      </VerticalTimeline>
    </MainLayout>
  );
}
export default Blogs;
