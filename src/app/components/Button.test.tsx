import {render , screen}  from '@testing-library/react'
import Button from './Button';



test('First time Test',()=>{
    render(<Button/>);
    const test = screen.getByText(/Button React Test/i);
     expect(test).toBeInTheDocument();
})