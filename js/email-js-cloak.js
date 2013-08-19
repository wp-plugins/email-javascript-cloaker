jQuery(document).ready(function() {
	console.log( "Ready to cloak" );

	jQuery( ".spEmailJSCloak" ).each( function(){
		console.log( "Processing cloak" );
		var address = jQuery( this ).html().replace( / -dot- /g, "." ).replace( / -at- /g, "@" );
		jQuery( this ).html( '<a href="mailto:' + address + '">' + address + '</a>' );
	});
	
});

