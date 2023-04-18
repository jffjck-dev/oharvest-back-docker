sqitch add 1.create_table -n "Creation of necessary tables"
sqitch add 2.function_select -n "Creation of select function for category, plot, product and variety"
sqitch add 3.crud_category -n "crud function to the category table"
sqitch add 4.crud_plot -n "crud function for the plot table"
sqitch add 5.crud_product -n "crud function for the product table"
sqitch add 6.crud_variety -n "crud function for variety table"sqitch
sqitch add 7.product_in_plot -n "create link table between product and plot with view and functions"
sqitch add 8.delete_functions -n "adding functions delete to all tables"
sqitch add 9.update_view_product -n "Updating view product including varieties associated"
