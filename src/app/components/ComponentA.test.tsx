import { render,screen , fireEvent } from '@testing-library/react';
import ComponentA from './ComponentA';


describe('ComponentA input test',()=>{

    test('render input',()=>{
        render(<ComponentA/>)
        const checkInput = screen.getByRole('textbox')
        expect(checkInput).toBeInTheDocument()
        const checkPlaceHolder = screen.getByPlaceholderText('Enter Name')
        expect(checkPlaceHolder).toBeInTheDocument()
        expect(checkInput).toHaveAttribute('name','name')
    })

    test('updates input value correctly',()=>{
         render(<ComponentA/>)
         fireEvent.change(screen.getByTestId('name-input'),{target:{value:"Aman"}})
         expect(screen.getByTestId('name-input')).toHaveValue('Aman')
    })

})