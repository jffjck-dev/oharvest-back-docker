echo "Seeding script launch !"
echo "-----------------------"
read -rp 'User to use >> ' dbuser
read -rp 'Database to use >> ' database

psql -U "$dbuser" -d "$database" -f ./data/seed.sql