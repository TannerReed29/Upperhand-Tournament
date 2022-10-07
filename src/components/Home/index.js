import React from "react";
import { Link } from "react-router-dom";
import { FaDiscord} from "react-icons/fa";


function Home() {
    return (
        <section className="home my-5 py-5">
            <div className="title text-center">
                <h2>Upperhand EFT Capture The Bag Tournament 2022</h2>
                <a className="mx-4" href="https://discord.gg/upperhand"><FaDiscord size={70} /></a>
                <Link className="btn btn-success mx-4" to="Bracket">View the Bracket</Link>
            </div>
        </section>
    );
}


export default Home;