type Props = {
    gpx: string;
};

export default function AdventureRoute({ gpx }: Props) {
    return (
        <section>
            <h2>A ROTA</h2>

            <p>
                Percurso registrado durante o pedal.
            </p>

            <a href={gpx} download>
                Baixar rota GPX
            </a>
        </section>
    );
}