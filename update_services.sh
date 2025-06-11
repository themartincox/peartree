#!/bin/bash

# Services to update
services=("emergency" "implants" "orthodontics" "restorative")

for service in "${services[@]}"; do
    file="/home/project/pear-tree-dental/src/app/services/$service/page.tsx"
    
    # Add import after the Badge import
    sed -i '/import { Badge } from "@\/components\/ui\/badge";/a import ServiceNavigation from "@/components/ServiceNavigation";' "$file"
    
    # Add component before closing div and return
    sed -i '/^      <\/section>$/a\\n      {/* Service Navigation */}\n      <ServiceNavigation />' "$file"
    
    echo "Updated $service service page"
done
