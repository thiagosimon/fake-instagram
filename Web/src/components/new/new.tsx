
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { IProps, IState } from './interface';
import api from '../../services/api';
import { NewPost } from './styles';


class New extends Component<IProps, IState> {
    state:IState = {
        image: {} as any,
        author: '',
        place: '',
        description: '',
        hashtags: '',

    };

    componentDidMount() {}

    handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData();

        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);

        await api.post('/api/post/create', data);

        this.props.history.push('/');
    }

    handleImageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ image: e.target.files![0] });
    }

    handleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        const key = e.currentTarget.name;

        if (Object.keys(this.state).includes(key)) {
            this.setState({ [key]: e.target.value } as unknown as Pick<IState, keyof IState>);
          }
    }

    render() {
        return (
          <NewPost id="new-post" onSubmit={this.handleSubmit}>
            <input type="file" onChange={this.handleImageChange} />
            <input type="text" name="author" placeholder="Autor do post" onChange={this.handleChange} value={this.state.author} />
            <input type="text" name="place" placeholder="local do post" onChange={this.handleChange} value={this.state.place} />
            <input type="text" name="description" placeholder="descrição do post" onChange={this.handleChange} value={this.state.description} />
            <input type="text" name="hashtags" placeholder="hashtag" onChange={this.handleChange} value={this.state.hashtags} />
            <button type="submit">Enviar</button>
          </NewPost>
        );
    }
}

export default withRouter(New);

// export default New;
