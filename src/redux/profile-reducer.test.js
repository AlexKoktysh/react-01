import React from 'react';
import profileReducer, { addPost } from "./profile-reducer";

let state = {
    postsData: [
    {id: 1, message: 'My name is Sasha', likeCounts: '26'},
    {id: 1, message: 'I am from Belarus', likeCounts: '2'}
    ]
}

test('length of posts should be incremented', () => {
    let action = addPost('my name is BelGIM')

    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(3)
});

test('message of new post should be correct', () => {
    let action = addPost('my name is BelGIM')

    let newState = profileReducer(state, action)

    expect(newState.postsData[2].message).toBe('my name is BelGIM')
});