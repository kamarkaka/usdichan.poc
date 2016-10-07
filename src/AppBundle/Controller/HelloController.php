<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class HelloController extends Controller
{
	public function indexAction($name)
	{
		if($name == 'test') {
			throw $this->createNotFoundException('The name does not exist');
		}

		return new Response('<html><body>Hello ' . $name . '</body></html>');
	}
}