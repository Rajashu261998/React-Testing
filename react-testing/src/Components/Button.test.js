import { render,screen } from "@testing-library/react"
import Button from "./Button"
import userEvent from "@testing-library/user-event"
import App from "../App"
import renderer from "react-test-renderer"

describe("Testing the Custom button component",()=>{
    it("should be in the DOM tree",()=>{
        render(<Button>Testing Button</Button>)
        // screen.debug()
        let button= screen.getByText("Testing Button")

        expect(button).toBeInTheDocument()


    })
    it("should have a buton with the text 'Click Me ' in the App.js",()=>{
        render(<App/>)
        // screen.debug()
        let button=screen.getByTestId('customButton')
        expect(button).toHaveTextContent('Click Me')

    })
    it("should check if the label is present as passed through props", ()=>{
        render(<Button>Testing</Button>)
        let button = screen.getByTestId('customButtom')
        expect(button).toHaveTextContent('Testing')
    })
    it('should be an empty DOM element , if the children prop is not passed',()=>{
        render(<Button></Button>)
        let button=screen.getByTestId("customButton")
        expect(button).toBeEmptyDOMElement
    })
    it.only('should toggle the theme when the button is clicked',()=>{
        render(<App/>)
        let button=screen.getByTestId('customButton')
        let h3Tag=screen.getByAltText('Curent theme is light')
        expect(h3Tag).toBeTextContent('light')
        userEvent.click(button)
        

        expect(h3Tag).toHaveTextContent("dark")
    })
    it("should invoke the onClick function",()=>{
        const mockFun=jest.fn();
        render(<Button onClick={mockFun}>Checking onClick</Button>)
       

        let button=screen.getAllByTestId("customButton")
        userEvent.click(button)
        expect(mockFun).toBeCalledTimes(1)
    })
    it('should create/match the snapshot',()=>{
        const tree = renderer
        .create(
            <Button colorScheme={'green'} variant={'bordered'}>
                Custom Button
            </Button>
        )
        .toJSON()

        expect(tree).toMatchSnapshot

    })
})