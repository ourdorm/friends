import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceLink {
  label: string;
  url: string;
  note?: string;
  offline?: boolean;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services: ServiceLink[] = [
    { label: 'git.elrant.team', url: 'https://git.elrant.team', note: 'forgejo' },
    { label: 'radio.dorm.social', url: 'https://radio.dorm.social/public/radio', note: 'azuracast' },
    { label: 'dorm.social', url: 'https://dorm.social', note: 'our turtkey/fediverse instance' },
    { label: 'cloud.dorm.social', url: 'https://cloud.dorm.social', note: 'nextcloud' },
    { label: 'updog.dorm.social', url: 'https://updog.dorm.social', note: 'uptime kuma' },
    { label: 'friends.dorm.social', url: 'https://friends.dorm.social', note: '> You are Here' },
    { label: 'irc.dorm.social', url: 'https://irc.dorm.social', note: 'not up yet', offline: true },
    { label: 'xmpp.dorm.social', url: 'https://xmpp.dorm.social', note: 'ejabberd, no web gui' },
    { label: 'matrix.dorm.social', url: 'https://matrix.dorm.social', note: 'tuwunel, no web gui' },
    { label: 'mumble.dorm.social', url: 'https://mumble.dorm.social', note: 'murmurd, no web gui' },
  ];
}
