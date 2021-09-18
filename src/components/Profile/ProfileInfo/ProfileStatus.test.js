import React from "react";
import {create} from "react-test-renderer";
import ProfileStatusClass from "./ProfileStatus";


describe("ProfileStatus component", () => {

    test("the status from the props should go to the local state", () => {
        const component = create(<ProfileStatusClass status="Egorius"/>);
        const instance1 = component.getInstance();
        expect(instance1.state.status).toBe("Egorius");
    });

    test("the span is shown on the screen", () => {
        const component = create(<ProfileStatusClass status="Egorius"/>);
        const root1 = component.root;
        const span1 = root1.findByType('span');
        console.log(span1.props.children);
        console.log(span1.props);
        console.log(span1.children);
        expect(span1).not.toBeNull();
        expect(span1.children.length).toBe(1);
        expect(span1.props.children).toBe('Egorius');
    });

    test("the text in the span = correct status = text in the props.status", () => {
        const component = create(<ProfileStatusClass status="Egorius"/>);
        const root1 = component.root;
        const span1 = root1.findByType('span');
        expect(span1.children[0]).toBe('Egorius');
        // expect(span2.props.children).toBe('Egorius');
    });

    test("the input is not shown on the screen", () => {
        const component = create(<ProfileStatusClass status="Egorius"/>);
        const root1 = component.root;
        expect(() => {
            const input1 = root1.findByType('input');
        }).toThrow();
        // expect(span1.children.length).toBe(1);
    });

    test("the input should be displayed after doubleclick", () => {
        const component = create(<ProfileStatusClass status="Egorius"/>);
        const root1 = component.root;
        const span1 = root1.findByType('span');
        const instance1 = component.getInstance();
        span1.props.onDoubleClick();

        setTimeout(() => {

            const input1 = root1.findByType('input');

            expect(input1.props.value).toBe("Egorius");

            expect(() => {
                const span1 = root1.findByType('span');
            }).toThrow();

        }, 0);
        // const input1 = root1.findByType('input');
        // expect(input1.props.value).toBe("Egorius");
        // expect(() => {
        //     const span1 = root1.findByType('span');
        // }).toThrow();
        expect(instance1.state.editMode).toBe(true);
    });

    test("callback should be called", () => {

        const mockCallback = jest.fn();

        const component = create(<ProfileStatusClass status="Egorius" updateStatusThunk={mockCallback}/>);
        const instance1 = component.getInstance();
        instance1.no_statusClick();

        expect(mockCallback.mock.calls.length).toBe(1);
        console.log(mockCallback.mock.calls[0]);
    });

});
