import Nav from "../components/Nav";

export default function About() {
    return (
        <div>
            <Nav />
            <div className="about">
                <h1>About the Book Keep:</h1>
                <p>This site was developed by an avid reader and software developer. You can come here to keep track of books that you've read or are interested in reading.</p>
                <p>This site is experimental and was built mostly to test the chops of its author. It will change and evolve with time.</p>
            </div>
        </div>
    );
};