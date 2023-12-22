import Link from 'next/link'
// import ContactForm from "@/app/contact/components/contactForm.tsx";
export default function Blogs(){
    return <>
    <section className="Sub-header">
      <nav>
      <a href="/" className="logo">
          Xplore
          <i className="fab fa-staylinked" />
          kill
        </a>
        <div className="nav-links" id="navLinks">
          {/* reposnive bar open and close */}
         
          <ul>
            <li>
            <Link href="/">Home</Link>
            </li>
            <li>
              <a href="course">Course</a>
            </li>
            <li>
              <a href="blog">Blog</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
       
        {/* reposnive bar open and close */}
      </nav>
      <h1>Our Post</h1>
    </section>
    {/* Blog Page Section Start */}
    <section className="blog-content">
      <div className="row">
        <div className="blog-left">
          <h2>Our Certificate &amp; Online Program</h2>
          <h5>Aug 1, 2021</h5>
          <img src="img/post.png" alt="" />
          <p>
            ider message post hu gye if it works then  yup
          </p>

          {/* <div className="comment-box">
            <h3>Leave a Comment</h3>
            <ContactForm/>
          </div> */}



    <div style={{ backgroundColor: '#FFD1DC', fontFamily: 'Arial', padding: '20px' }}>
      <h1 style={{ color: '#FF88CC' }}>Contact Us</h1>
      <form>
        <label style={{ color: '#FF88CC' }}>Name:</label><br/>
        <input type="text" name="name" style={{ backgroundColor: '#FFB7C5' }}/><br/>
        <label style={{ color: '#FF88CC' }}>Email:</label><br/>
        <input type="email" name="email" style={{ backgroundColor: '#FFB7C5' }}/><br/>
        <label style={{ color: '#FF88CC' }}>Phone:</label><br/>
        <input type="tel" name="phone" style={{ backgroundColor: '#FFB7C5' }}/><br/>
        <label style={{ color: '#FF88CC' }}>Date of Birth:</label><br/>
        <input type="date" name="dob" style={{ backgroundColor: '#FFB7C5' }}/><br/>
        <label style={{ color: '#FF88CC' }}>Favorite Color:</label><br/>
        <input type="color" name="color" style={{ backgroundColor: '#FFB7C5' }}/><br/>
        <label style={{ color: '#FF88CC' }}>Country:</label><br/>
        <input type="text" name="country" style={{ backgroundColor: '#FFB7C5' }}/><br/>
        <label style={{ color: '#FF88CC' }}>Bio:</label><br/>
        <textarea name="bio" style={{ backgroundColor: '#FFB7C5' }}/><br/>
        <label style={{ color: '#FF88CC' }}>Agree to Terms:</label><br/>
        <input type="checkbox" name="terms"/><br/>
        <input type="submit" value="Submit" style={{ backgroundColor: '#FF88CC', color: 'white', fontSize: '20px', borderRadius: '50px', padding: '10px 20px' }}/>
        
      </form>
    </div>
        </div>
        <div className="blog-right">
          <h3>Post Categories</h3>
          <div>
            <span>Business Analytics</span>
            <span>12</span>
          </div>
          <div>
            <span>Machine Learning</span>
            <span>29</span>
          </div>
          <div>
            <span>Computer Science</span>
            <span>15</span>
          </div>
          <div>
            <span>Data Analytics</span>
            <span>22</span>
          </div>
          <div>
            <span>Full Stack</span>
            <span>20</span>
          </div>
        </div>
      </div>
    </section>
    {/* Blog Page Section end */}
    {/* Footer Section start */}
    <section className="footer">
      <hr />
      <h4>About Us</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
        incidunt odio nam facilis, eligendi
        <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt
        exercitationem, illum molestiae dolorem.
      </p>
      <div className="icons">
        <i className="fab fa-facebook-f" />
        <i className="fab fa-instagram" />
        <i className="fab fa-twitter" />
        <i className="fab fa-linkedin" />
      </div>
      <p>
      Made with <i className="fas fa-heart" /> by{" "}
      <a href="https://github.com/Yinmisan/multi_page_to_nextjs">Yinmisan</a>
    </p>
    <p>
      Copyright © 2021 <a href="/">Xplore Skill</a>. All Rights
      Reserved
    </p>
    </section>
    {/* Footer Section end */}
  </>
  
}