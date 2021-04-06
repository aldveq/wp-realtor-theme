<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Shepard_Realtors
 */

get_header();
?>

<section class="style-guide-container">
    <div class="container">
        <h1>Style Guide of Shepard Realtors</h1>
    </div>
    <div class="container">
        <h1>Headings</h1>
        <h1>Headline 1 / A Visual Type Scale</h1>
        <h2>Headline 2 / A Visual Type Scale</h2>
        <h3>Headline 3 / A Visual Type Scale</h3>
        <h4>Headline 4 / A Visual Type Scale</h4>
        <h5>Headline 5 / A Visual Type Scale</h5>
        <h6>Headline 6 / A Visual Type Scale</h6>
    </div>
    <div class="container">
        <h5>Paragraphs</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra nunc eu nunc facilisis, in aliquam erat euismod. Donec non rhoncus mauris. Phasellus pulvinar finibus ligula eget blandit. Nunc eu posuere tellus, ut tincidunt enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra nunc eu nunc facilisis, in aliquam erat euismod. Donec non rhoncus mauris. Phasellus pulvinar finibus ligula eget blandit. Nunc eu posuere tellus, ut tincidunt enim.</p>
    </div>
    <div class="container">
        <h1>Outline Buttons</h1>
        <button class="button button__outline-hamburguer"></button>
        <br>
        <br>
        <button class="button button__outline-hamburguer disabled"></button>
        <br>
        <br>
        <button class="button button__outline">Submit</button>
        <br>
        <br>
        <button class="button button__outline disabled">Submit</button>
        <br>
        <br>
        <button class="button button__outline button__outline--small">View Listings</button>
        <br>
        <br>
        <button class="button button__outline button__outline--small disabled">View Listings</button>
        <br>
        <br>
        <button class="button button__outline button__icon button__outline--right-arrow">Buyers<span></span></button>
        <br>
        <button class="button button__outline button__icon button__outline--right-arrow disabled">Buyers<span></span></button>
    </div>
    <br>
    <div class="container">
        <h1>Filled Buttons</h1>
        <button class="button button__filled">Submit</button>
        <br>
        <br>
        <button class="button button__filled disabled">Submit</button>
        <br>
        <br>
        <button class="button button__filled button__icon button__filled--search">Search<span></span></button>
        <br>
        <button class="button button__filled button__icon button__filled--search disabled">Search<span></span></button>
    </div>
    <div class="container">
        <h1>Text Buttons</h1>
        <button class="button button__text">Advanced Search</button>
        <br>
        <br>
        <button class="button button__text button__text--grey">Map Search</button>
    </div>
    <div class="container">
        <h1>Inputs</h1>
        <input type="text" class="input" placeholder="Search for a location...">
        <br>
        <br>
        <input type="text" class="input error" placeholder="Min. Price">
        <br>
        <br>
        <select class="input input__select">
            <option value="Select an option">Select an option</option>
            <option value="Bathrooms">Bathrooms</option>
            <option value="Bathrooms">Bedrooms</option>
        </select>
        <br>
        <br>
        <br>
        <br>
    </div>
</section>

<?php
get_footer();