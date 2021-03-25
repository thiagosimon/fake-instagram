import gql from 'graphql-tag';
import * as React from 'react';
import * as ReactApollo from 'react-apollo';

export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export interface InputTypePost {
  author: Scalars['String'];
  place: Scalars['String'];
  description: Scalars['String'];
  hashtags: Scalars['String'];
}

export interface Mutation {
  __typename?: 'Mutation';
  addLike: TypePost;
  addPost: TypePost;
}

export interface MutationAddLikeArgs {
  id: Scalars['String'];
}

export interface MutationAddPostArgs {
  file: Scalars['Upload'];
  inputTypePost: InputTypePost;
}

export interface Query {
  __typename?: 'Query';
  getPosts: TypePost[];
}

export interface TypePost {
  __typename?: 'TypePost';
  _id: Scalars['ID'];
  author: Scalars['String'];
  place: Scalars['String'];
  description: Scalars['String'];
  hashtags: Scalars['String'];
  image: Scalars['String'];
  likes: Scalars['Int'];
}

export interface PostsQueryQueryVariables {}

export type PostsQueryQuery = { __typename?: 'Query' } & {
  getPosts: ({ __typename?: 'TypePost' } & Pick<
      TypePost,
      | '_id'
      | 'author'
      | 'place'
      | 'description'
      | 'likes'
      | 'image'
      | 'hashtags'
    >)[];
};

export const PostsQueryDocument = gql`
  query PostsQuery {
    getPosts {
      _id
      author
      place
      description
      likes
      image
      hashtags
    }
  }
`;
export type PostsQueryComponentProps = Omit<
  ReactApollo.QueryProps<PostsQueryQuery, PostsQueryQueryVariables>,
  'query'
>;

export const PostsQueryComponent = (props: PostsQueryComponentProps) => (
  <ReactApollo.Query<PostsQueryQuery, PostsQueryQueryVariables>
    query={PostsQueryDocument}
    {...props}
  />
);

export type PostsQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<PostsQueryQuery, PostsQueryQueryVariables>
> &
  TChildProps;
export function withPostsQuery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    PostsQueryQuery,
    PostsQueryQueryVariables,
    PostsQueryProps<TChildProps>
  >,
) {
  return ReactApollo.withQuery<
    TProps,
    PostsQueryQuery,
    PostsQueryQueryVariables,
    PostsQueryProps<TChildProps>
  >(PostsQueryDocument, {
    alias: 'withPostsQuery',
    ...operationOptions,
  });
}
