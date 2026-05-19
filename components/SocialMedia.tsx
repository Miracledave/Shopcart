import React from 'react'
import { FaGithub, FaYoutube, FaLinkedin, FaTwitter, FaSlack } from 'react-icons/fa'
import { TooltipProvider, TooltipTrigger, Tooltip, TooltipContent } from './ui/tooltip'
import Link from 'next/link'
import { cn } from '@/lib/utils';

interface Props{
    className?:  string;
    iconClassName?: string;
    tooltipClassName?: string;
}
const socialLink = [
    {
        title: 'Youtube',
        href: 'https://www.youtube.com/',
        Icon: <FaYoutube className="w-5 h-5" />,
    },
    {
        title: 'Github',
        href: 'https://www.github.com/',
        Icon: <FaGithub className="w-5 h-5" />,
    },
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/',
        Icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
        title: 'Twitter',
        href: 'https://www.twitter.com/',
        Icon: <FaTwitter className="w-5 h-5" />,
    },
    {
        title: 'Slack',
        href: 'https://www.slack.com/',
        Icon: <FaSlack className="w-5 h-5" />,
    }
];


const SocialMedia = ({className, iconClassName, tooltipClassName}: Props) => {
  return (
  <TooltipProvider>
    <div className={cn('flex items-center gap-3.5', className)}>
        {socialLink?.map((item) => (
            <Tooltip key={item?.title}>
                <TooltipTrigger asChild>
                    <Link 
                        href={item?.href}  
                        key={item?.title}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={cn('p-2 border rounded-full hover:border-shop_light_green hoverEffect', iconClassName)}  >
                        {item?.Icon}
                    </Link>
                </TooltipTrigger>
                <TooltipContent className={cn('bg-white text-darkColor font-semibold ', tooltipClassName)} >
                    {item?.title}
                </TooltipContent>
            </Tooltip>
        ))}
    </div>
  </TooltipProvider>
)
};

export default SocialMedia
