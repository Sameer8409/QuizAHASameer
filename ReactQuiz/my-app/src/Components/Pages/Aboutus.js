import React, {Component} from 'react'; 
import FirstHeader from '../../Components/Include/FirstHeader.js';
import Footer from '../../Components/Include/Footer.js';
export default class Aboutus extends Component{

render(){
	return(
            <div className="about-us">
                <FirstHeader/>
                <div className="default-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                        <h2>Demo Content </h2>
                        <p>When you have a great story about how your product or service was built to change lives,
                         share it. The "About Us" page is a great place for it to live, too. Good stories humanize your brand,
                          providing context and meaning for your product. What’s more, good stories are sticky 
                          -- which means people are more likely to connect with them and pass them on.</p>

                            <p>Yellow Leaf Hammocks tells users about its product by describing how the hammocks empower artisan 
                            weavers and their families. The company breaks down different pieces of the story into sections that
                             combine words and easily digestible graphics, painting a picture instead of big chunks of text. They're 
                             clear about why they're different: "Not a Charity," the page reads. And then: "This is the basis for a brighter future,
                              built on a hand up, not a handout."</p>
                            <p>Every company has a story to tell, 
                            so break out your storytelling skills from that random English 
                            class you took years ago and put them to work on your "About Us" page. Using descriptive and emotive copy
                             and gorgeous graphics, an "About Us" page with a story works harder for your business than a generic one.</p>
                        <p>When you have a great story about how your product or service was built to change lives,
                         share it. The "About Us" page is a great place for it to live, too. Good stories humanize your brand,
                          providing context and meaning for your product. What’s more, good stories are sticky 
                          -- which means people are more likely to connect with them and pass them on.</p>

                            <p>Yellow Leaf Hammocks tells users about its product by describing how the hammocks empower artisan 
                            weavers and their families. The company breaks down different pieces of the story into sections that
                             combine words and easily digestible graphics, painting a picture instead of big chunks of text. They're 
                             clear about why they're different: "Not a Charity," the page reads. And then: "This is the basis for a brighter future,
                              built on a hand up, not a handout."</p>
                        </div>
                    </div>
                </div>
                </div>
                <Footer/>
            </div>
        );
	}
}