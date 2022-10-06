import React from "react";
import { Link } from "react-router-dom";
import { FaDiscord} from "react-icons/fa";


function Home() {
    return (
        <section className="home my-5 py-5">
            <div className="title">
                <h2>Upperhand EFT Capture The Bag Tournament 2022</h2>
                <a href="https://discord.gg/upperhand"><FaDiscord /></a>
                <Link className="btn btn-success" to="Bracket">View the Bracket</Link>
            </div>
        </section>
    );
}


export default Home;