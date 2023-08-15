echo "Seeding script launch !"
echo "-----------------------"
read -rp 'User to use >> ' db_user
read -rp 'Database to use >> ' database

psql -h localhost -p 5433 -U "$db_user" -d "$database" -f ./data/seed.sql