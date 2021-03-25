/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import io from 'socket.io-client';
import api from '../../services/api';
import { IProps, IState, IPost } from './interface';
import { PostsQueryComponent } from '../../generated/graphql';


import {
 Section, Article, ArticleHeader, UserInfo, Author, Place,
 Image, Footer, Actions, ActionsButton, Description, Hashtags,
} from './styles';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';


class Feed extends Component<IProps, IState> {
  state:IState = { feed: [] }

    async componentDidMount() {
        const response = await api.get('/api/post/all');
      //  this.state.feed = [...response.data];
         this.setState({ feed: response.data.payload });

         this.registerToSocket();
    }

    handleLike = async (id:string) => {
      await api.post(`/api/post/${id}/like`);
    }

    registerToSocket = () => {
      const socket = io('http://localhost:3333');

      socket.on('post', (newPost:IPost) => {
        this.setState({ feed: [newPost, ...this.state.feed] });
      });


      socket.on('like', (likedPost:IPost) => {
        this.setState({
          feed: this.state.feed.map(post => (post._id === likedPost._id ? likedPost : post)),
        });
      });
    }


    render() {
        return (

          <Section id="post-list">
            <PostsQueryComponent>
              {({ data, error, loading }) => {
                if (error || loading) return null;
                if (data) {
                  return (
                    data.getPosts.map(post => (
                      <Article key={post._id}>
                        <ArticleHeader>
                          <UserInfo className="user-info">
                            <Author>{post.author}</Author>
                            <Place className="place">{post.place}</Place>
                          </UserInfo>
                          <img src={more} alt="mais" />
                        </ArticleHeader>
                        <Image src={`http://localhost:3333/files/${post.image}`} alt="" />
                        <Footer>
                          <Actions className="actions">
                            <ActionsButton type="button" onClick={() => this.handleLike(post._id)}>
                              <img src={like} alt="" />
                            </ActionsButton>
                            <ActionsButton type="button" onClick={() => {}}>
                              <img src={comment} alt="" />
                            </ActionsButton>
                            <ActionsButton type="button" onClick={() => {}}>
                              <img src={send} alt="" />
                            </ActionsButton>
                          </Actions>
                          <strong>{`${post.likes} curtidas`}</strong>
                          <Description>
                            {post.description}
                            <Hashtags>{post.hashtags}</Hashtags>
                          </Description>
                        </Footer>
                      </Article>
                  )));
                }
                  return null;
                }}
            </PostsQueryComponent>
          </Section>
        );
    }
}


export default Feed;
