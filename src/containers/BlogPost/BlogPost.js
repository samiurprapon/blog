import React, { useState, useEffect } from "react";
import moment from "moment";
import Markdown from "markdown-to-jsx";
import readingTime from "reading-time";
import { gql, useQuery } from '@apollo/client';

import "./BlogPost.css";

import config from "../../config";
import Loader from "../../components/loader/Loader";
import RecentHeader from "../../components/recentHeader/RecentHeader";
import RecentPost from "../../components/recentPost/RecentPost";

import Profile from "../../components/profile/Profile";

import { CodeBlock } from "../../components/markDown/MarkDown";

import PostContainer from "../../components/post/PostContainer";
import PostTitle from "../../components/post/PostTitle";
import PostDate from "../../components/post/PostDate";
// import PostDateLink from "../../components/post/PostDateLink";
import PostReadingTime from "../../components/post/PostReadingTime";

import AuthorAvatar from "../../components/post/Author/AuthorAvatar";
import AuthorName from "../../components/post/Author/AuthorName";
import AuthorDetails from "../../components/post/Author/AuthorDetails";

export default function BlogPost() {
  const issueNumber = parseInt(window.location.href.split("/").pop());
  const GET_POSTS = gql`{
    repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
      issue(number: ${issueNumber}) {
        isReadByViewer 
        title
        body
        bodyHTML
        url
        bodyText
        number
        bodyHTML
        author {
          url
          avatarUrl
          login
        }
        reactions(first:100){
          nodes{
            content
            user{
              id
              login
            }
          }
        }
        updatedAt
        id
        comments(first:100) {
          nodes {
            author {
              ... on User {
                avatarUrl
                name
                login
              }
            }
            body
            bodyHTML
            bodyText
            publishedAt
            updatedAt
          }
        }
      }
    }
  }
  `;
  const [post, setPost] = useState([]);
  const { loading, error, data } = useQuery(GET_POSTS);

  useEffect(() => {
    if (!loading) {
      if (data) {
        const issues = data.repository.issue;
        setPost(issues);
      }
    }
  }, [loading, error, data]);

  if (loading) {
    return <Loader />;
  }

  return (
		<div className='center'>
			<section className='post'>
				{post.title && (
					<PostContainer>
						<PostTitle>{post.title}</PostTitle>
						<div>
							<AuthorDetails>
								<AuthorAvatar src={post.author.avatarUrl} alt={post.author.login} />
								<div>
									<AuthorName>{post.author.login}</AuthorName>
									<PostReadingTime>{readingTime(post.body).minutes} Min Read.</PostReadingTime>
									<PostDate>{moment(post.updatedAt).format('Do MMM YYYY')}</PostDate>
									{/* <PostDateLink href={post.url} target='_black'>
										View On Github
									</PostDateLink> */}
								</div>
							</AuthorDetails>
						</div>
						<div className='article'>
							<Markdown
								options={{
									overrides: {
										// a: {
										//   component: HyperLink,
										// },
										pre: {
											component: CodeBlock,
										},
										slugify: (str) => str,
										disableParsingRawHTML: true,
										wrapper: 'aside',
										forceWrapper: true,
									},
								}}
							>
								{post.body}
							</Markdown>
						</div>
					</PostContainer>
				)}
			</section>

			<section className='sidebar'>
				<div className='items'>
					<RecentHeader title={'Related Post'} />
					<RecentPost />
					<RecentPost />
					<RecentPost />
					<br />
				</div>

				<div className='items'>
					<Profile />
				</div>
			</section>
		</div>
	);
}
