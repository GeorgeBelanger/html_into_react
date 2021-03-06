import React from 'react'
import Listings from '../listings'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjhupbfdv1msh0155lkixi5zx'
})

const ListingPage = ({match}) => {
  return (
    <React.Fragment>
      <title>Landing</title>
      {/* Banner */}
      {/* Note: The "styleN" class below should match that of the header element. */}
      <section id='banner' className='style2'>
        <div className='inner'>
          <span className='image'>
            <img src='images/pic07.jpg' alt='Alt Image1' />
          </span>
          <header className='major'>
            <h1>Landing</h1>
          </header>
          <div className='content'>
            <p>Lorem ipsum dolor sit amet nullam consequat<br />
              sed veroeros. tempus adipiscing nulla.</p>
          </div>
        </div>
      </section>
      {/* Main */}
      <div id='main'>
        <ApolloProvider client={client}>
          <section id='one' className='tiles'>
            <Listings match={match} />
          </section>
        </ApolloProvider>
        {/* One */}
        <section id='one'>
          <div className='inner'>
            <header className='major'>
              <h2>Sed amet aliquam</h2>
            </header>
            <p />
          </div>
        </section>
        {/* Two */}
        <section id='two' className='spotlights'>
          <section>
            <a href='generic.html' className='image'>
              <img src='images/pic08.jpg' alt='Alt Image2' data-position='center center' />
            </a>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>Orci maecenas</h3>
                </header>
                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                <ul className='actions'>
                  <li><a href='generic.html' className='button'>Learn more</a></li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a href='generic.html' className='image'>
              <img src='images/pic09.jpg' alt='Alt Image3' data-position='top center' />
            </a>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>Rhoncus magna</h3>
                </header>
                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                <ul className='actions'>
                  <li><a href='generic.html' className='button'>Learn more</a></li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a href='generic.html' className='image'>
              <img src='images/pic10.jpg' alt='Alt Image4' data-position='25% 25%' />
            </a>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>Sed nunc ligula</h3>
                </header>
                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                <ul className='actions'>
                  <li><a href='generic.html' className='button'>Learn more</a></li>
                </ul>
              </div>
            </div>
          </section>
        </section>
        {/* Three */}
        <section id='three'>
          <div className='inner'>
            <header className='major'>
              <h2>Massa libero</h2>
            </header>
            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
            <ul className='actions'>
              <li><a href='generic.html' className='button next'>Get Started</a></li>
            </ul>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default ListingPage
