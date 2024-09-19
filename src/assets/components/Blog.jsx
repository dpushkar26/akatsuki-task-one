// eslint-disable-next-line no-unused-vars
import React from 'react';

const blogData = [
  {
    id: 1,
    image: './assets/images/blog-1.png',
    alt: 'Building microservices with Dropwizard, MongoDB & Docker',
    topic: 'Database',
    title: 'Building microservices with Dropwizard, MongoDB & Docker',
    description: 'This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi-platform is the best option for scale up and have fault tolerance, load balancing, map reduce, etc.',
    author: 'Julia Walker',
    date: 'Jan 17, 2022',
    time: '3 min',
  },
  {
    id: 2,
    image: './assets/images/blog-2.png',
    alt: 'Fast web page loading on a $20 feature phone',
    topic: 'Web Performance',
    title: 'Fast web page loading on a $20 feature phone',
    description: 'Feature phones are affordable (under $20-25), low-end devices enabling 100s of millions of users in developing countries to leverage the web. Think of them as a light version of a smart phone.',
    author: 'Julia Walker',
    date: 'Dec 10, 2021',
    time: '2 min',
  },
  {
    id: 3,
    image: './assets/images/blog-3.png',
    alt: 'Accessibility Tips for Web Developers',
    topic: 'Accessibility',
    title: 'Fast web page loading on a $20 feature phone',
    description: 'Its awesome to build sites that are inclusive and accessible to everyone. There are at least six key areas of disability we can optimize for: visual,hearing, mobility, cognition, speech and neural. Many tools and resources can help here, even if you are totally new to web accessibility.',
    author: 'Julia Walker',
    date: 'Nov 28, 2021',
    time: '4 min',
  },
  {
    id: 4,
    image: './assets/images/blog-4.png',
    alt: 'Dynamically Securing Databasesv using Hashicorp Vault',
    topic: 'Database',
    title: 'Dynamically Securing Databasesv using Hashicorp Vault',
    description: 'Nowadays, it is hard to profoundly talk about security in the IT industry, since it has to be considered on so many different levels: from securing code chunks, securing containers, up to  securing complex infrastructures and  defining strong authorization and authentication policies across the enterprise.',
    author: 'Julia Walker',
    date: 'Nov 20, 2021',
    time: '4 min',
  },
  {
    id: 5,
    image: './assets/images/blog-5.png',
    alt: 'Adaptive Loading - Improving Web Performance on low-end devices',
    topic: 'Web Performance',
    title: 'Adaptive Loading - Improving Web Performance on low-end devices',
    description: ' Adaptive Loading: Do not just respond based on screen size, adapt based on actual device hardware. Any user can have a slow experience. In a world with widely varying device capabilities, a "one-size" fits all experience may not always work. Sites that delight users on high-end devices can be unusable on low-end ones, particularly on median mobile and desktop hardware and in emerging markets.',
    author: 'Julia Walker',
    date: 'Nov 10, 2021',
    time: '3 min',
  },
  {
    id: 6,
    image: './assets/images/blog-6.png',
    alt:'Do not Develop Just for Yourself - A Developers Checklist to Accessibility',
    topic: 'Accessibility',
    title:'Do not Develop Just for Yourself - A Developers Checklist to Accessibility',
    description: 'We, as developers, tend to develop sites ciously for people like ourselves. If we do not actively pay attention, the sites are often accessible only for certain types of people: Sighted mouse-users, who have good fine motor skills and are good at using computers.',
    author: 'Julia Walker',
    date: 'Oct 25, 2021',
    time: '7 min',
  },
  {
    id: 7,
    image: './assets/images/blog-7.png',
    alt: 'Building a Restful CRUD API with Node JS, Express, and MongoDB',
    topic: 'Database',
    title: 'Building a Restful CRUD API with Node JS, Express, and MongoDB',
    description: 'Application Programming Interface is the abbreviation for API. An API is a software interface that enables two apps to communicate with one another. In other words, an API is a messenger that sends your request to the provider and then returns the response to you.',
    author: 'Julia Walker',
    date: 'Oct 15, 2021',
    time: '5 min',
  },
  {
    id: 8,
    image: './assets/images/blog-8.png',
    alt: 'Monitoring Performance with the PageSpeed Insights API',
    topic: 'Web Performance',
    title: 'Monitoring Performance with the PageSpeed Insights API',
    description: 'The PageSpeed Insights API provides free access to performance monitoring for web pages and returns data with suggestions for how to improve. The V5 API includes lab data from Lighthouse and real-world data from the Chrome User Experience Report (CrUX).',
    author: 'Julia Walker',
    date: 'Oct 3, 2021',
    time: '5 min',
  },
  {
    id: 9,
    image: './assets/images/blog-9.png',
    alt: 'The best web accessibility tools for developers in 2021',
    topic: 'Accessibility',
    title: 'The best web accessibility tools for developers in 2021',
    description: 'The quality of the tools you use defines the speed with which you can diagnose and resolve problems. Each year the landscape changes dramatically in web technologies, and of late the tooling for accessibility is no exception.',
    author: 'Julia Walker',
    date: 'Sep 13, 2021',
    time: '7 min',
  },
  {
    id: 10,
    image: './assets/images/blog-10.png',
    alt: 'How to connect a React frontend with a NodeJS/Express backend',
    topic: 'Database',
    title: 'How to connect a React frontend with a NodeJS/Express backend',
    description: 'The MERN (MongoDB, Express, React, NodeJS) stack is very popular for making full stack applications, utilizing Javascript for both the backend and frontend as well as a document-oriented or non relational database (MongoDB), meaning that it is structured like JSO rather than a large excel sheet like SQL databases are.',
    author: 'Julia Walker',
    date: 'Sep 21, 2021',
    time: '4 min',
  },
];

const Blog = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="blog">
          <h2 className="h2">Latest Blog Post</h2>

          <div className="blog-card-group">
            {blogData.map((post) => (
              <div key={post.id} className="blog-card">
                <div className="blog-card-banner">
                  <img
                    src={post.image}
                    alt={post.alt}
                    width="250"
                    className="blog-banner-img"
                  />
                </div>

                <div className="blog-content-wrapper">
                  <button className="blog-topic text-tiny">
                    {post.topic}
                  </button>

                  <h3>
                    <a href="#" className="h3">
                      {post.title}
                    </a>
                  </h3>

                  <p className="blog-text">
                    {post.description}
                  </p>

                  <div className="wrapper-flex">
                    <div className="profile-wrapper">
                      <img
                        src="./assets/images/author.png"
                        alt={post.author}
                        width="50"
                      />
                    </div>

                    <div className="wrapper">
                      <a href="#" className="h4">{post.author}</a>

                      <p className="text-sm">
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                        <span className="separator"></span>
                        <ion-icon name="time-outline"></ion-icon>
                        <time dateTime={`PT${post.time.split(' ')[0]}M`}>{post.time}</time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="btn load-more">Load More</button>
        </div>

        <div className="aside">
          <div className="topics">
            <h2 className="h2">Topics</h2>

            <a href="#" className="topic-btn">
              <div className="icon-box">
                <ion-icon name="server-outline"></ion-icon>
              </div>

              <p>Database</p>
            </a>

            <a href="#" className="topic-btn">
              <div className="icon-box">
                <ion-icon name="accessibility-outline"></ion-icon>
              </div>

              <p>Accessibility</p>
            </a>

            <a href="#" className="topic-btn">
              <div className="icon-box">
                <ion-icon name="rocket-outline"></ion-icon>
              </div>

              <p>Web Performance</p>
            </a>
          </div>

          <div className="tags">
            <h2 className="h2">Tags</h2>

            <div className="wrapper">
              <button className="hashtag">#mongodb</button>
              <button className="hashtag">#nodejs</button>
              <button className="hashtag">#a11y</button>
              <button className="hashtag">#mobility</button>
              <button className="hashtag">#inclusion</button>
              <button className="hashtag">#webperf</button>
              <button className="hashtag">#optimize</button>
              <button className="hashtag">#performance</button>
            </div>
          </div>

          <div className="contact">
            <h2 className="h2">Let ss Talk</h2>

            <div className="wrapper">
              <p>
                Do you want to learn more about how I can help your company overcome problems? Let us have a conversation.
              </p>

              <ul className="social-link">
                <li>
                  <a href="#" className="icon-box discord">
                    <ion-icon name="logo-discord"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="icon-box twitter">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="icon-box facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="newsletter">
            <h2 className="h2">Newsletter</h2>

            <div className="wrapper">
              <p>
                Subscribe to our newsletter to be among the first to keep up with the latest updates.
              </p>

              <form action="#">
                <input type="email" name="email" placeholder="Email Address" required />

                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
