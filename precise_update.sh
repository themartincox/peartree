#!/bin/bash

# Function to update a single service file
update_service() {
    local service="$1"
    local file="/home/project/pear-tree-dental/src/app/services/$service/page.tsx"
    
    echo "Updating $service service..."
    
    # Create a temporary file with the changes
    awk '
    /^import \{ Badge \} from "@\/components\/ui\/badge";$/ {
        print $0
        print "import ServiceNavigation from \"@/components/ServiceNavigation\";"
        next
    }
    /^    <\/div>$/ {
        if (found_section == 1) {
            print ""
            print "      {/* Service Navigation */}"
            print "      <ServiceNavigation />"
            print $0
            found_section = 0
            next
        }
        print $0
        next
    }
    /^      <\/section>$/ {
        print $0
        found_section = 1
        next
    }
    { print $0 }
    ' "$file" > "${file}.tmp"
    
    # Replace the original file with the updated one
    mv "${file}.tmp" "$file"
    
    echo "✓ Updated $service"
}

# Update each service
update_service "emergency"
update_service "implants" 
update_service "orthodontics"
update_service "restorative"

echo "All services updated successfully!"
