import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import CreateRoomPage from '../CreateRoom';
import {AppContext} from '../../AppContextProvider';

it('creates a room properly', async() =>{
    const dummyCreateRoom = jest.fn();

    // Test first render and effect
    render(
        <AppContext.Provider value={{createRoom: dummyCreateRoom}}>
            <CreateRoomPage />
        </AppContext.Provider>
    )
    const name = screen.getByPlaceholderText('Enter room name');
    userEvent.type(name, 'Test Room Name')

    const desc = screen.getByPlaceholderText('Enter description');
    userEvent.type(desc, 'Test description')

    const pass = screen.getByPlaceholderText('Enter password');
    userEvent.type(pass, 'Test password')

    const createButton = screen.getByText('Create Room');
    fireEvent.click(createButton);

    expect(dummyCreateRoom).toHaveBeenCalledTimes(1);
    const room = dummyCreateRoom.mock.calls[0][0];

    expect(room.name).toBe('Test Room Name')
    expect(room.description).toBe('Test description')
    expect(room.password).toBe('Test password')

})