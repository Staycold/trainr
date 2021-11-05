import React from "react";
import imgs from "../../images";

const HomeTop = () => {
    
    return (
        <main>

<div className='HPTtop'>
   <h1> Can you Believe it!?</h1>
   <p>This is what we can get done if we just fucking focus!?!
       I mean, once you get into it it's fine you know?
       But I've been sluggish and need to watch the next.js
       Stuff with more intensity.
   </p>
</div>

<div className='HPTbottom'>
    <img id='graph1' src={imgs.graph1} alt='stock graph one' />
    <h1>BRUUUHHH</h1>
    <img id='graph2' src={imgs.graph2} alt='stock graph two' />
</div>


</main>
    );
};

export default HomeTop;