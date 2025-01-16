import { test, describe } from "vitest";
import { render, screen } from "@testing-library/react";

import Todo from "../src/Todos/Todo";

const testTodo = {
    text: "!!! HOPEFUllyy unique enough test TEXT !!!",
    done: false
};

describe("Todo", async () => {


    test("shows the text", async () => {
        render(
            <Todo
                todo={testTodo}
            />
        );

        screen.getByText(testTodo.text);


    });
});