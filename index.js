class TodoAPI {
    async create(text) {
        try {
            const response = await fetch("http://localhost:4000/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: text
                })
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }

            return await response.json();
        } catch (error) {
            console.log(error.message);
        }
    }
}

const todoAPI = new TodoAPI();

todoUI.init();
