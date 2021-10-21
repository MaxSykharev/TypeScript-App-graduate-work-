import { Avatar, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useContext, useEffect, useState } from 'react';
import { COMMENTS_ENDPOINT, POSTS_ENDPOINT } from '../../constants/endpoints';
import { getRequest } from './../../utils/index';
import { UserContext } from '../../context/userContext';
import './styles.scss'



interface IPost {
  userId: number,
  id: number,
  title: string,
  body: string,
};
interface IComment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export const Posts = () => {
  const { users } = useContext(UserContext)

  const [posts, setPosts] = useState<any>([])
  const getPosts = () => {
    getRequest(POSTS_ENDPOINT)
      .then(res => setPosts(res.data))
      .catch(error => console.log('error', error))
  };
  const [comments, setComments] = useState<any>([])
  const getComments = () => {
    getRequest(COMMENTS_ENDPOINT)
      .then(res => setComments(res.data))
      .catch(error => console.log('error', error))
  }
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const [isModalVisible, setIsModalVisible] = useState(false);
  const [previewPostId, setPreviewPostId] = useState(null);


  const showModal = (id: any, userId: any) => {
    setPreviewPostId(id);
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='post_list'>
      {posts.map((post: IPost) => {
        return (
          <div className='post_content' key={post.id}>
            {users.map((user) => {
              if (user.id === post.userId) {
                return (
                  <p>{user.name}</p>
                )
              }
            })}
            <Avatar icon={<UserOutlined />} />
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button className='btn-comments' onClick={() => showModal(post.id, post.userId)} >
              Show Comments
            </button>
          </div>
        )
      })}
      <Modal
        onCancel={handleCancel}
        title={''}
        visible={isModalVisible}
        footer={[
        ]}
      >
        <div className="post">
          <div>
            <p className='title'>
              {posts.find((item: IPost) => item.id === previewPostId)?.title}
            </p>
            <hr></hr>
            <p>{posts.find((item: IPost) => item.id === previewPostId)?.body}</p>
            <hr />
          </div>
        </div>
        <div className='comments'>
          <p>Comments:</p>
          {comments.map((item: IComment) => {
            if (item.postId === previewPostId) {
              return (
                <div>
                  <p>{item.body}</p>
                </div>
              )
            }
          })}
        </div>
      </Modal>
    </div>

  )
};

