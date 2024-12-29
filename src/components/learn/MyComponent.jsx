// JSX : 1 parent
// Fragment

import './style.css';

const MyComponent = () => {
    return (
        <>
            <div >Hoàng Huân nè update</div>
            <div className="child"
                style={{ borderRadius: "10px" }}
            >child</div>
        </>

    );

}

export default MyComponent;