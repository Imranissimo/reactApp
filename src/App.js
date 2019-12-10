import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './app/styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';

class App extends Component {
    render () {
        const posts = [
            { title: 'Lorem, ipsum dolor sit amet',
            postBody: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, temporibus! Deleniti voluptates magni fugiat aliquam facere optio, perferendis dolorem fugit obcaecati sunt sed accusantium reprehenderit molestias autem ipsum ea ipsam!Ea consectetur harum inventore non mollitia officiis placeat ullam dicta vitae ipsum nostrum, porro cupiditate cumque! Voluptate, assumenda doloribus, id reiciendis, quia libero voluptates pariatur eligendi odit sequi quod consectetur.Reiciendis dolore, perspiciatis sed eius pariatur at qui aperiam quam dicta eum explicabo aliquam possimus non maxime fuga nihil ratione cumque fugiat, voluptate veritatis eos corrupti tenetur provident. Suscipit, similique.' },
            { title: 'Lorem, ipsum dolor sit amet',
            postBody: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, temporibus! Deleniti voluptates magni fugiat aliquam facere optio, perferendis dolorem fugit obcaecati sunt sed accusantium reprehenderit molestias autem ipsum ea ipsam!Ea consectetur harum inventore non mollitia officiis placeat ullam dicta vitae ipsum nostrum, porro cupiditate cumque! Voluptate, assumenda doloribus, id reiciendis, quia libero voluptates pariatur eligendi odit sequi quod consectetur.Reiciendis dolore, perspiciatis sed eius pariatur at qui aperiam quam dicta eum explicabo aliquam possimus non maxime fuga nihil ratione cumque fugiat, voluptate veritatis eos corrupti tenetur provident. Suscipit, similique.' },
            { title: 'Lorem, ipsum dolor sit amet',
            postBody: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, temporibus! Deleniti voluptates magni fugiat aliquam facere optio, perferendis dolorem fugit obcaecati sunt sed accusantium reprehenderit molestias autem ipsum ea ipsam!Ea consectetur harum inventore non mollitia officiis placeat ullam dicta vitae ipsum nostrum, porro cupiditate cumque! Voluptate, assumenda doloribus, id reiciendis, quia libero voluptates pariatur eligendi odit sequi quod consectetur.Reiciendis dolore, perspiciatis sed eius pariatur at qui aperiam quam dicta eum explicabo aliquam possimus non maxime fuga nihil ratione cumque fugiat, voluptate veritatis eos corrupti tenetur provident. Suscipit, similique.' },
            { title: 'Lorem, ipsum dolor sit amet',
            postBody: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, temporibus! Deleniti voluptates magni fugiat aliquam facere optio, perferendis dolorem fugit obcaecati sunt sed accusantium reprehenderit molestias autem ipsum ea ipsam!Ea consectetur harum inventore non mollitia officiis placeat ullam dicta vitae ipsum nostrum, porro cupiditate cumque! Voluptate, assumenda doloribus, id reiciendis, quia libero voluptates pariatur eligendi odit sequi quod consectetur.Reiciendis dolore, perspiciatis sed eius pariatur at qui aperiam quam dicta eum explicabo aliquam possimus non maxime fuga nihil ratione cumque fugiat, voluptate veritatis eos corrupti tenetur provident. Suscipit, similique.' }
        ];
        return <div>
            <Blog posts={posts}/>
            <WelcomeModal/>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));