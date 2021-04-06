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
        plugins_url('build/styles.css', __FILE__ ),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'build/styles.css')
    );  

    // Registration of each block with register_block_type function
    $shepard_realtors_blocks = [
        'shepard-realtors/brand'
    ];

    foreach($shepard_realtors_blocks as $sr_block) {
        register_block_type($sr_block, array(
            'editor_script' => 'shepard-realtors-editor-script',
            'editor_style' => 'shepard-realtors-editor-styles',
            'style' => 'shepard-realtors-frontend-backend-styles'
        ));
    }

}
add_action('init', 'shepard_realtors_blocks');