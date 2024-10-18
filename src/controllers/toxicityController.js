import OpenAI from 'openai';

/**
 * Method: checkToxicity
 * Description: Checks if a message is toxic using OpenAI's GPT-4 model.
 */
export const checkToxicity = async (req, res) => {
    const { message } = req.body;
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    if (!OPENAI_API_KEY) {
        console.warn('OpenAI API key is not set.');
        return res.status(500).json({ error: 'Internal server error' });
    }

    const openai = new OpenAI(OPENAI_API_KEY);

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'user',
                    content: `Is the following comment demeaning, hateful, or otherwise harmful? Respond with ONLY a JSON boolean value.\n\n"${message}"`,
                },
            ]
        });

        // Clean up response
        const reply = completion.choices[0].message.content.slice(3, -3).replaceAll('json', '').trim();

        const isToxic = JSON.parse(reply.toLowerCase());

        res.json({ isToxic });
    } catch (error) {
        console.error('Error checking toxicity:', error);
        res.status(500).json({ error: 'Error checking toxicity', error: error });
    }
};
