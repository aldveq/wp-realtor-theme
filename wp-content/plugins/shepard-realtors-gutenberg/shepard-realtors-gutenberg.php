<?php
    /*
        Plugin Name: Shepard Realtors Gutenberg Blocks
        Plugin URI: 
        Description: Shepard Realtors Native Gutenberg Blocks
        Version: 1.0
        Author: Aldo Paz Velasquez
        Author URI: http://apazvelasquez.com
        License: GPL2
        License URI: https://www.gnu.org/licenses/gpl-2.0.html
    */

if(!defined('ABSPATH')) exit;

// Custom Gutenberg Blocks Category

function shepard_realtors_custom_gutenberg_blocks_category($categories, $post) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'shepard-realtors',
                'title' => 'Shepard Realtors',
                'icon' => 'admin-home'
            )
        )
    );
}
add_filter('block_categories', 'shepard_realtors_custom_gutenberg_blocks_category', 10, 2);

// Registration of gutenberg blocks, scripts & styles

function shepard_realtors_blocks() {
    // Exit execution if register_block_type function does not exist
    if (!function_exists('register_block_type')) {
        return;
    }

    // Gutenberg blocks registration
    wp_register_script(
        'shepard-realtors-editor-script',
        plugins_url('build/index.js', __FILE__ ),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );

    // Registration of the editor styles
    wp_register_style(
        'shepard-realtors-editor-styles',
        plugins_url('build/editor.css', __FILE__ ),
        array('wp-edit-blocks'),
        filemtime(plugin_dir_path(__FILE__) . 'build/editor.css')
    );  
    
    // Registration of the frontend & backend styles (same css file applied for both frontend & backend)
    wp_register_style(
        'shepard-realtors-frontend-backend-styles',
        plugins_url('build/index.css', __FILE__ ),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.css')
    );  

    // Registration of each block with register_block_type function
    $shepard_realtors_blocks = [
        'shepard-realtors/brand',
        'shepard-realtors/hero',
        'shepard-realtors/dream-houses',
        'shepard-realtors/house-card'
    ];

    foreach($shepard_realtors_blocks as $sr_block) {
        register_block_type($sr_block, array(
            'editor_script' => 'shepard-realtors-editor-script',
            'editor_style' => 'shepard-realtors-editor-styles',
            'style' => 'shepard-realtors-frontend-backend-styles'
        ));
    }

    // Registration of dynamic blocks
    register_block_type('shepard-realtors/properties', array(
        'editor_script' => 'shepard-realtors-editor-script',
        'editor_style' => 'shepard-realtors-editor-styles',
        'style' => 'shepard-realtors-frontend-backend-styles',
        'render_callback' => 'shepard_realtors_properties_block_callback'
    ));

}
add_action('init', 'shepard_realtors_blocks');

// Getting data of properties from the wp rest api
function shepard_realtors_properties_block_callback($attributes) {

    $properties = wp_get_recent_posts( array(
        'post_type' => 'property',
        'post_status' => 'publish',
        'numberposts' => 6
    ));

    if(count($properties) == 0) {
        return 'There are not properties available!';
    }

    $responseBody = '';
    $responseBody .= '<section class="properties-container">';
    $responseBody .= '<div class="container">';
    $responseBody .= '<h2 class="properties-container__main-title">'.$attributes['propertiesTitle'].'</h2>';
    $responseBody .= '<div class="card__wrap--outer properties-container__cards-wrapper">';

    foreach($properties as $prop):
        $post = get_post($prop['ID']);
        setup_postdata( $post );

        $responseBody .= sprintf(
            '
                <div class="card__wrap--inner properties-container__cards-inner-wrapper">
                    <div class="card properties-container__card">
                        <img src="%1$s" class="card__image properties-container__image" alt="%2$s" />
                        <div class="card__item card__flexible properties-container__flexible">
                            <div class="properties-container__address-container">
                                <span class="properties-container__address-one">%3$s</span>
                                <span class="properties-container__address-two">%4$s</span>
                            </div>
                            <div class="properties-container__price-container">
                                <span class="properties-container__price">%5$s</span>
                            </div>
                        </div>
                        <div class="card__footer properties-container__footer">
                            <div class="properties-container__details-container">
                                <svg width="20" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" class="properties-container__detail-svg-image"><path d="M19 5.78V3c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78C9.47.3 8.77 0 8 0H4C2.35 0 1 1.35 1 3v2.78C.39 6.33 0 7.12 0 8v5c0 .55.45 1 1 1s1-.45 1-1v-1h16v1c0 .55.45 1 1 1s1-.45 1-1V8c0-.88-.39-1.67-1-2.22zM12 2h4c.55 0 1 .45 1 1v2h-6V3c0-.55.45-1 1-1zM3 3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H3V3zm-1 7V8c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2H2z" fill="#AAADC3"></path></svg>
                                <span class="properties-container__details-text">%6$s</span>
                            </div>
                            <div class="properties-container__details-container">
                                <svg width="22" height="17" fill="none" xmlns="http://www.w3.org/2000/svg" class="properties-container__detail-svg-image"><path d="M20.302 8.342h-.132V3.093A2.196 2.196 0 0017.977.9c-.927 0-1.713.583-2.032 1.395h-.294a.797.797 0 100 1.596h1.86a.797.797 0 00.529-1.392.597.597 0 01.534.594v5.249H1.698a.797.797 0 100 1.595H2.76V11c0 1.494.729 2.816 1.844 3.636l-.447.447a.793.793 0 000 1.127.802.802 0 00.564.234c.202 0 .41-.08.564-.234l.847-.847c.367.095.748.151 1.147.151h7.442c.399 0 .78-.056 1.147-.151l.847.847a.802.802 0 00.564.234c.202 0 .41-.08.564-.234a.793.793 0 000-1.128s0 0 0 0l-.447-.446A4.506 4.506 0 0019.239 11V9.937H20.302a.797.797 0 100-1.595zM17.644 11a2.93 2.93 0 01-2.923 2.923H7.279A2.93 2.93 0 014.356 11V9.937h13.288V11z" fill="#AAADC3" stroke="#AAADC3" stroke-width="0.2"></path></svg>
                                <span class="properties-container__details-text">%7$s</span>
                            </div>
                            <div class="properties-container__details-container">
                                <svg width="20" height="17" fill="none" xmlns="http://www.w3.org/2000/svg" class="properties-container__detail-svg-image"><path d="M17 9h1.7c.46 0 .68-.57.33-.87L10.67.6c-.38-.34-.96-.34-1.34 0L.97 8.13c-.34.3-.13.87.33.87H3v3H2c-.55 0-1 .45-1 1s.45 1 1 1h1v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V9zM5 12V7.19l4-3.6V12H5zm6 0V3.59l4 3.6V12h-4z" fill="#AAADC3"></path></svg>
                                <span class="properties-container__details-text">%8$s</span>
                                <span class="properties-container__details-text">Sq Ft</span>
                            </div>
                            <div class="properties-container__details-container">
                                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="properties-container__detail-svg-image"><path d="M7.437 6.472a.68.68 0 00-.962.961l.318.319a.68.68 0 00.962-.962l-.318-.318z" fill="#AAADC3" stroke="#AAADC3" stroke-width="0.1"></path><path d="M14.87 15.83h0a.682.682 0 11.968-.962l3.014 3.022h0a.68.68 0 01-.479 1.16h0H1.63a.68.68 0 01-.68-.68V1.627v0h0a.68.68 0 011.16-.48h0l3.55 3.55h0a.682.682 0 010 .962s0 0 0 0l9.21 10.172zm0 0l.87.87-.87-.87zm1.029 1.168a.58.58 0 00-.158-.297l.158.297zm0 0a.58.58 0 01-.034.334m.034-.334l-.034.334m0 0a.58.58 0 01-.213.26m.213-.26l-.213.26m0 0a.58.58 0 01-.322.098m.322-.098l-.322.098m0 0H2.888a.58.58 0 01-.578-.578V4.67m13.02 13.02L2.31 4.67m0 0a.58.58 0 01.99-.411m-.99.41l.99-.41m0 0s0 0 0 0l1.4 1.4s0 0 0 0l-1.4-1.4z" fill="#AAADC3" stroke="#AAADC3" stroke-width="0.1"></path><path d="M11.633 10.67a.68.68 0 10-.962.962l.318.318a.68.68 0 10.962-.962l-.318-.318zM9.536 8.57a.68.68 0 10-.962.963l.318.318a.68.68 0 00.962-.962l-.318-.318zM13.733 12.767a.68.68 0 10-.962.962l.318.318a.68.68 0 10.962-.961l-.318-.319z" fill="#AAADC3" stroke="#AAADC3" stroke-width="0.1"></path></svg>
                                <span class="properties-container__details-text">%9$s</span>
                                <span class="properties-container__details-text">Acre lot</span>
                            </div>
                        </div>
                    </div>
                </div>
            ',
            get_the_post_thumbnail_url($post->ID),
            get_post_meta( get_post_thumbnail_id($post->ID), '_wp_attachment_image_alt', true),
            get_post_meta($post->ID, 'property_address_one', true),
            get_post_meta($post->ID, 'property_address_two', true),
            get_post_meta($post->ID, 'property_price', true),
            get_post_meta($post->ID, 'property_bedrooms_quantity', true),
            get_post_meta($post->ID, 'property_bathrooms_quantity', true),
            get_post_meta($post->ID, 'property_sq_ft', true),
            get_post_meta($post->ID, 'property_acre_lot', true)
        );
        wp_reset_postdata();

    endforeach;

    $responseBody .= '</div>';
    $responseBody .= '</div>';
    $responseBody .= '</section>';

    return $responseBody;
}