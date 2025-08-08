import React, { Component } from 'react'

class Movies extends Component {

  movie_data={'name':"war2",'release_date':'14-Aug'}

  render() {
    return <div>
                <h3>Movie Data:{JSON.stringify(this.movie_data)}</h3>
                <h4>Relase Data:{this.movie_data.release_date}</h4>
            </div>
        }
}

export default Movies