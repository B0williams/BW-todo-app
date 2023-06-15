type TaskInputData = {
    peopleViewingThePage: string[];
    numberOfGreeting: number;
    greeting: string;
};




function TaskInput(componentData: TaskInputData) {
    return (
    <> 
    <br/>
    <br/>
    <br/>
    {componentData
    .peopleViewingThePage
    .map((people, index) => (
        <p key={index}>{people} is viewing your page</p>
    ))}

    {Array(componentData.numberOfGreeting)
    .fill(0)
    .map((e, i) => <p key={i}> Hello world from Baeden</p>)}
    <p>Hello world from Baeden</p>

    {/*{Array(componentData.numberOfGreeting)
    .fill(undefined)
.map(() =>(
    <p>Hello world or (componentData.greeting).</p>
))}*/}
</>
    );
}

export default TaskInput;
