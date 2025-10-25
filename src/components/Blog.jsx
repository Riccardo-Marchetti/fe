import { useEffect, useState } from "react";
import marmo from "../assets/marmo.webp";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://31.97.47.207:8080/blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        console.log(data);
        setBlogs(data.content); // Assuming the response has a 'content' field for the blog list
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <>
      <div class="section">
        <div class="container">
          <div class="section__description">
            <h1 class="section__title">
              Blog del piastrellista: <mark>novità</mark>,
              <mark> soluzioni</mark> e <mark>consigli</mark>
            </h1>

            <div class="txt">
              <p>Rimani aggiornato sulle ultime novità di Nome pavimenti</p>
            </div>
          </div>
        </div>
      </div>

      <div class="blog">
        <div class="container">
          <div class="blog__wrapper">
            {blogs.map((blog) => (
              <div key={blog.id} className="blog__item">
                <div className="card">
                  <Link to={`/blog/${blog.id}`}>
                    <div className="card__img">
                      <img src={marmo} alt={blog.title} loading="lazy" />
                    </div>
                    <div className="card__content">
                      <span className="card__date">
                        {new Date(blog.creationDate).toLocaleDateString(
                          "it-IT",
                          { day: "numeric", month: "long", year: "numeric" }
                        )}
                      </span>
                      <h2 className="card__title">{blog.title}</h2>
                      <div className="button button--black">
                        <span>Leggi l'articolo</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
            {/* <div class="blog__item">
              <div class="card">
                <a href="#">
                  <div class="card__img">
                    <img src={marmo} alt="img" loading="lazy" />
                  </div>

                  <div class="card__content">
                    <span class="card__date">9 maggio 2025</span>

                    <h2 class="card__title">Titolo</h2>

                    <div class="button button--black">
                      <span>
                        <span>Leggi l'articolo</span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="blog__item">
              <div class="card">
                <a href="#">
                  <div class="card__img">
                    <img src={marmo} alt="img" loading="lazy" />
                  </div>

                  <div class="card__content">
                    <span class="card__date">9 maggio 2025</span>

                    <h2 class="card__title">Titolo</h2>

                    <div class="button button--black">
                      <span>
                        <span>Leggi l'articolo</span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="blog__item">
              <div class="card">
                <a href="#">
                  <div class="card__img">
                    <img src={marmo} alt="img" loading="lazy" />
                  </div>

                  <div class="card__content">
                    <span class="card__date">9 maggio 2025</span>

                    <h2 class="card__title">Titolo</h2>

                    <div class="button button--black">
                      <span>
                        <span>Leggi l'articolo</span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="blog__item">
              <div class="card">
                <a href="#">
                  <div class="card__img">
                    <img src={marmo} alt="img" loading="lazy" />
                  </div>

                  <div class="card__content">
                    <span class="card__date">9 maggio 2025</span>

                    <h2 class="card__title">Titolo</h2>

                    <div class="button button--black">
                      <span>
                        <span>Leggi l'articolo</span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
