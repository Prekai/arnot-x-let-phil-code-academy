export const Main = () => {
    return (
    <>
    <main>
    <section id="heroSection">
       <h1>Your professional identity in one place</h1> 
       <button type="button" name="createYourLinkHub">Create your Link Hub</button>
       <button type="button" name="findSomeone">Find someone</button>
       <input type="search" name="contactSearch"></input>
       <h3>Recently vieved profiles</h3>
       <p>Meet members of the Link Hub directory who updated their portfolios today</p>
       <section id="recentlyViewedProfileCards">
        <p>Profile card placeholder</p>
        <p>Profile card placeholder</p>
        <p>Profile card placeholder</p>
       </section>
       <br/>
        </section>
     <section id="manifesto">
        <p id="functionManifesto">everything in one portable card</p>
        <h2>Made for Entrepreneurs, Engineers & Creators</h2>
        <p>Manifesto card placeholder</p>
        <p>Manifesto card placeholder</p>
        <p>Manifesto card placeholder</p>
     </section>
     <section id="setUpOffer">
        <h2>Setup Your network profile in minutes</h2>
        <p>Drop your link and get recognised</p>
        <p>Setup card placeholder</p>
        <p>Setup card placeholder</p>
        <p>Setup card placeholder</p>
     </section>
    </main>
    </>
    )
}

export default Main;