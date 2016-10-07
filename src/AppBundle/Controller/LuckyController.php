<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class LuckyController extends Controller
{
	public function numberAction()
	{
		$number = rand(0, 100);

		return new Response(
			'<html><body>Lucky number: ' . $number . '</body></html>'
		);
	}

	public function numbersAction($count)
	{
		$numbers = array();
		for ($i = 0; $i < $count; $i++) {
			$numbers[] = rand(0, 100);
		}
		$numbersList = implode(', ', $numbers);

		$html = $this->container->get('templating')->render(
			'lucky/number.html.twig',
			array('luckyNumberList' => $numbersList)
		);

		return new Response($html);
	}

	public function apiNumberAction()
	{
		return $this->json(array(
			'lucky_number' => rand(0, 100),
		));
	}

}