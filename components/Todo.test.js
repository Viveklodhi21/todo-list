import { render, fireEvent} from "@testing-library/react"
import Todo from "./Todo"
import '@testing-library/react/dont-cleanup-after-each'

describe("add a item", ()=>{
    it('renders without crashing',()=>{
        render(<Todo/>)
    })
    it('add todo',()=>{
        const {getByText} = render(<Todo/>)
        const Add1 = getByText(/^add$/)
    })
})

// it('takes input of items', ()=>{
//  const ididid =  render(<Todo/>)
//  const AddTodo1= component.getByTestId("buttonPlease")

//  expect(AddTodo1.textContent).toBe(" ")
// })