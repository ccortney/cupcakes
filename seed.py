"""Seed file to make sample data for cupcakes db."""

from models import Cupcake, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
Cupcake.query.delete()

# Add cupcakes
pumpkin = Cupcake(flavor = "Pumpkin", size = "Medium", rating = 9.5, image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_2b769rhzDrQUQlvNa-X9QAGb5xOM0bU7A&usqp=CAU")
hot_cocoa = Cupcake(flavor = "Hot Coca", size = "Small", rating = 8, image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBJlSkoszGyCfNE4zs2OTrn4BwCmkODlhH5g&usqp=CAU")
chocolate = Cupcake(flavor = "Chocolate", size = "Large", rating = 7)

# Add new cupcakes to the session
db.session.add(pumpkin)
db.session.add(hot_cocoa)
db.session.add(chocolate)

# Commit
db.session.commit()