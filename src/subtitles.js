const bubbleTextElement = document.querySelector('.bubble>p')

export default {
	colleague: {
		text: 'Eh ben tu sais, cette année, on est partis à la campagne, histoire de changer d’air.',
		next: 'colleague2',
	},
	colleague2: {
		text: 'Franchement, j’étais pas super motivé mais bon, c’était la seule option qui rentrait dans le budget.',
		next: 'colleague3',
	},
	colleague3: {
		text: 'On a pris la route un vendredi, forcément y avait des bouchons... trois heures de plus que prévu.',
		next: 'colleague4',
	},
	colleague4: {
		text: 'Quand on est arrivés, la location ressemblait pas du tout aux photos, tu vois, un vieux truc délabré.',
		next: 'colleague5',
	},
	colleague5: {
		text: 'J’avais choisi un gîte “authentique”... Bah c’était surtout authentiquement sale !',
		next: 'colleague6',
	},
	colleague6: {
		text: 'J’avais choisi un gîte “authentique”... Bah c’était surtout authentiquement sale !',
		next: 'colleague7',
	},
	colleague7: {
		text: 'La literie, laisse tomber, on aurait dit un lit d’hôpital, mal au dos direct.',
		next: 'colleague8',
	},
	colleague8: {
		text: 'Et puis les voisins... ah, les voisins, des parisiens bruyants qui faisaient la fête tous les soirs.',
		next: 'colleague9',
	},
	colleague9: {
		text: 'On avait prévu de faire plein de randos, mais il a plu presque tous les jours, super.',
		next: 'colleague10',
	},
	colleague10: {
		text: 'Du coup, on est restés enfermés à regarder la télé... une vieille télé cathodique avec trois chaînes qui marchaient mal.',
		next: 'colleague11',
	},
	colleague11: {
		text: 'Oh et puis, y avait pas de réseau ! T’imagines, pas de Wi-Fi, rien ! On était coupés du monde !',
		next: 'colleague12',
	},
	colleague12: {
		text: 'Une fois, on a tenté d’aller se baigner à la rivière... elle était glacée et pleine de moustiques.',
		next: 'colleague13',
	},
	colleague13: {
		text: 'Ah et t’aurais vu les restos du coin ! Des pièges à touristes hors de prix pour des plats surgelés, ça m’a coûté un bras.',
		next: 'colleague14',
	},
	colleague14: {
		text: 'J’ai même chopé une indigestion après un magret de canard suspect... j’ai passé une nuit blanche à vomir.',
		next: 'colleague15',
	},
	colleague15: {
		text: 'Et le marché local, soi-disant "typique", c\'était juste des bibelots moches et des saucisses sèches à 10 euros pièce.',
		next: 'colleague16',
	},
	colleague16: {
		text: "J'avais aussi réservé une activité de canoë, mais à cause des pluies, la rivière était impraticable.",
		next: 'colleague17',
	},
	colleague17: {
		text: 'Bref, on a fini par faire le tour de toutes les églises du village, parce que c’était la seule chose à faire.',
		next: 'colleague18',
	},
	colleague18: {
		text: 'Ma femme était à deux doigts de péter un câble, les enfants s’ennuyaient à mourir.',
		next: 'colleague19',
	},
	colleague19: {
		text: 'Au final, on a écourté les vacances, on est rentrés deux jours plus tôt, et là… panne de voiture !',
		next: 'colleague20',
	},
	colleague20: {
		text: 'Trois heures d’attente pour la dépanneuse sous un soleil de plomb, je te raconte pas l’ambiance.',
		next: 'colleague21',
	},
	colleague21: {
		text: 'Honnêtement, je me suis jamais autant réjoui de retrouver mon bureau...',
	},
	client: {
		where: bubbleTextElement,
		text: 'Bonjour, je veux faire fructifier mon argent, même si je suis bien conscient des dangers potentiels.',
		success: 'clientSuccess',
		error: 'clientError',
	},
	clientSuccess: {
		text: 'Effectivement, mais laissez-moi vous dire, le ciel est littéralement la limite en matière de rendement à long terme.',
		next: 'clientSuccess2',
	},
	clientSuccess2: {
		where: bubbleTextElement,
		text: 'Je comprends, mais je ne suis pas vraiment dans l’optique d’attendre l’éternité pour récolter les fruits.',
		success: 'clientSuccess3',
		error: 'clientError',
	},
	clientSuccess3: {
		text: 'Ah, mais certaines opportunités peuvent littéralement transformer votre portefeuille du jour au lendemain.',
		next: 'clientSuccess4',
	},
	clientSuccess4: {
		where: bubbleTextElement,
		text: 'Fascinant. Quels leviers stratégiques proposez-vous ?',
	},
	clientError: {
		text: 'Pourquoi ne pas commencer par investir dans toi-même avant d’appeler un conseiller ?',
	},
}
