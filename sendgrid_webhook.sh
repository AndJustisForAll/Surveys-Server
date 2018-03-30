function localtunnel {
    lt --port 5000 --subdomain amdvsubbdomains1417998dz
}

until localtunnel; do
    echo "localtunnel server crashed!"
    sleep 2
done
