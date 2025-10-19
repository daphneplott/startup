import React from 'react';
import './potions.css';

export function GeneratePotion() {
    {/* --Potions:
        - A potion of transformation (Snake skin, lotus, gold dust)
        - A potion to reverse a transformation (Snake skin, black sand, mint leaves)
        - A potion of love (mistletoe, lotus, poppy seed)
        - A potion of hatred (mistletoe, jellyfish venom, poppy seed)
        - A potion to reverse a love potion (mistleote, black sand, gold dust)
        - A potion for good luck (clover, lotus, mint leaves)
        - A potion for bad luck (clover, jellyfish venom, gold dust)
        - A potion to reset one's luck (clover, black sand, poppy seed)
        -- */}
    
    const Potion1 = {name: "Elixir of Metamorphosis", attr1: "Gold color", attr2: "transformative power", attr3:"extra strength"}
    const Potion2 = {name: "Unshifting Serum", attr1: "Green color", attr2: "transformative power", attr3: "restorative"}
    const Potion3 = {name: "Venus's Whisper", attr1: "Red color", attr2:"power of love", attr3:"extra strength"}
    const Potion4 = {name: "Bitterheart Brew", attr1: "Red color", attr2:"power of love", attr3:"inverted effect"}
    const Potion5 = {name: "Cure of Cupid", attr1: "Gold color", attr2:"power of love", attr3:"restorative"}
    const Potion6 = {name: "Felix's Favor", attr1: "Green color", attr2:"power of luck", attr3: "extra strength"}
    const Potion7 = {name: "Black Cat Potion", attr1:"Gold color", attr2:"power of luck", attr3:"inverted effect"}
    const Potion8 = {name: "Chance Cleanser", attr1: "Red color", attr2:"power of luck", attr3: "restorative"}

    const potions = [Potion1, Potion2, Potion3, Potion4,Potion5,Potion6,Potion7,Potion8]
    const Potion = potions[Math.floor(Math.random() * 8)];

    return (
        <p >Assignment: {Potion.name} <br/>Attributes: {Potion.attr1}, {Potion.attr2}, {Potion.attr3}</p>
    )
}