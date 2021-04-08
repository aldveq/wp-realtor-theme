<?php

 /*
    Plugin Name: Shepard Realtors Posts Types
    Plugin URI: 
    Description: Shepard Realtors Native Posts Types
    Version: 1.0
    Author: Aldo Paz Velasquez
    Author URI: http://apazvelasquez.com
    License: GPL2
    License URI: https://www.gnu.org/licenses/gpl-2.0.html
    Text Domain: shepard-realtors
*/

if(!defined('ABSPATH')) exit;

// Property Custom Post Type Definition
function custom_post_property() {

	$labels = array(
		'name'               => __( 'Properties' ),
		'singular_name'      => __( 'property' ),
		'add_new'            => __( 'Add New Property' ),
		'add_new_item'       => __( 'Add New Property' ),
		'edit_item'          => __( 'Edit Property' ),
		'new_item'           => __( 'New Property' ),
		'all_items'          => __( 'All Properties' ),
		'view_item'          => __( 'View Property' ),
		'search_items'       => __( 'Search Property' )
	);

	$args = array(
		'labels'            => $labels,
		'description'       => 'Property custom post type',
		'public'            => true,
		'menu_position'     => 5,
		'taxonomies'        => array( 'property-categories' ),
		'show_in_rest'      => true,
		'supports'          => array( 'title', 'editor' ,'thumbnail', 'page-attributes', 'custom-fields' ),
		'menu_icon'         => 'dashicons-admin-multisite',
		'has_archive'       => true,
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'query_var'         => true, 
        'show_in_rest'      => true,
        'rest_base'         => 'properties'
	);

	register_post_type( 'property', $args);

}
add_action( 'init', 'custom_post_property' );

// Taxonomies definition for Property CPT
function property_register_taxonomies() {

	$labels = [
		"name" => __( "Property Categories" ),
		"singular_name" => __( "Property Category" ),
	];

	$args = [
		"label" => __( "Property Categories" ),
		"labels" => $labels,
		"public" => true,
		"publicly_queryable" => true,
		"hierarchical" => true,
		"show_ui" => true,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"query_var" => true,
		"rewrite" => [ 'slug' => 'property_category', 'with_front' => true, ],
		"show_admin_column" => false,
		"show_in_rest" => true,
		"rest_base" => "property_category",
		"rest_controller_class" => "WP_REST_Terms_Controller",
		"show_in_quick_edit" => false,
	];
	register_taxonomy( "property_category", [ "property" ], $args );
}
add_action( 'init', 'property_register_taxonomies' );

// Adding property custom fields to the properties end point in the wp rest api
function property_custom_fields_to_rest_api() {

    register_rest_field(
        'property',
        'property_address_one',
        array(
            'get_callback' => 'get_property_address_one',
            'update_callback' => null,
            'schema' => null
        ) 
    );

    register_rest_field(
        'property',
        'property_address_two',
        array(
            'get_callback' => 'get_property_address_two',
            'update_callback' => null,
            'schema' => null
        ) 
    );

    register_rest_field(
        'property',
        'property_price',
        array(
            'get_callback' => 'get_property_price',
            'update_callback' => null,
            'schema' => null
        ) 
    );

    register_rest_field(
        'property',
        'property_bedrooms_quantity',
        array(
            'get_callback' => 'get_property_bedrooms_quantity',
            'update_callback' => null,
            'schema' => null
        ) 
    );

    register_rest_field(
        'property',
        'property_bathrooms_quantity',
        array(
            'get_callback' => 'get_property_bathrooms_quantity',
            'update_callback' => null,
            'schema' => null
        ) 
    );

    register_rest_field(
        'property',
        'property_sq_ft',
        array(
            'get_callback' => 'get_property_sq_ft',
            'update_callback' => null,
            'schema' => null
        ) 
    );

    register_rest_field(
        'property',
        'property_acre_lot',
        array(
            'get_callback' => 'get_property_acre_lot',
            'update_callback' => null,
            'schema' => null
        ) 
    );

    register_rest_field(
        'property',
        'taxonomy_name',
        array(
            'get_callback' => 'get_taxonomy_name',
            'update_callback' => null,
            'schema' => null
        ) 
    );

    register_rest_field(
        'property',
        'featured_image',
        array(
            'get_callback' => 'get_featured_image',
            'update_callback' => null,
            'schema' => null
        ) 
    );

}
add_action('rest_api_init', 'property_custom_fields_to_rest_api');

function get_property_address_one() {
    if(!function_exists('get_post_meta')) {
        return;
    }

    if(get_post_meta(get_the_ID(), 'property_address_one')) {
        $property_address_one_value = get_post_meta(get_the_ID(), 'property_address_one');
        return $property_address_one_value[0];
    }

    return false;
}

function get_property_address_two() {
    if(!function_exists('get_post_meta')) {
        return;
    }

    if(get_post_meta(get_the_ID(), 'property_address_two')) {
        $property_address_two_value = get_post_meta(get_the_ID(), 'property_address_two');
        return $property_address_two_value[0];
    }

    return false;
}

function get_property_price() {
    if(!function_exists('get_post_meta')) {
        return;
    }

    if(get_post_meta(get_the_ID(), 'property_price')) {
        $property_price_value = get_post_meta(get_the_ID(), 'property_price');
        return $property_price_value[0];
    }

    return false;
}

function get_property_bedrooms_quantity() {
    if(!function_exists('get_post_meta')) {
        return;
    }

    if(get_post_meta(get_the_ID(), 'property_bedrooms_quantity')) {
        $property_bedrooms_quantity_value = get_post_meta(get_the_ID(), 'property_bedrooms_quantity');
        return $property_bedrooms_quantity_value[0];
    }

    return false;
}

function get_property_bathrooms_quantity() {
    if(!function_exists('get_post_meta')) {
        return;
    }

    if(get_post_meta(get_the_ID(), 'property_bathrooms_quantity')) {
        $property_bathrooms_quantity_value = get_post_meta(get_the_ID(), 'property_bathrooms_quantity');
        return $property_bathrooms_quantity_value[0];
    }

    return false;
}

function get_property_sq_ft() {
    if(!function_exists('get_post_meta')) {
        return;
    }

    if(get_post_meta(get_the_ID(), 'property_sq_ft')) {
        $property_sq_ft_value = get_post_meta(get_the_ID(), 'property_sq_ft');
        return $property_sq_ft_value[0];
    }

    return false;
}

function get_property_acre_lot() {
    if(!function_exists('get_post_meta')) {
        return;
    }

    if(get_post_meta(get_the_ID(), 'property_acre_lot')) {
        $property_acre_lot_value = get_post_meta(get_the_ID(), 'property_acre_lot');
        return $property_acre_lot_value[0];
    }

    return false;
}

function get_taxonomy_name() {
    global $post;
    return get_object_taxonomies($post);
}

function get_featured_image($object, $field_name, $request) {
    if($object['featured_media']) {
        $image = wp_get_attachment_image_src( $object['featured_media'], '' );
        return $image[0];
    }

    return false;
}