import Button from "./Button";
import ListItem from "./List";

function Form({ reqType, setReqType }) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Button
                buttonText="users"
                reqType={reqType}
                setReqtype={setReqType}
            />
            <Button
                buttonText="posts"
                reqType={reqType}
                setReqType={setReqType}
            />
            <Button
                buttonText="comments"
                reqType={reqType}
                setReqType={setReqType}
            />
        </form>
    );
}

export default Form;
